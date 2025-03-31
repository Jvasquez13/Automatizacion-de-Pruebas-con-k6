import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 20,
  duration: '30s',
};

export default function () {
  // Caso 1
  let res1 = http.get('https://reqres.in/api/users?page=2');
  check(res1, {
    'GET lista - status 200': (r) => r.status === 200,
    'GET lista - contiene data': (r) => r.body.includes('data'),
  });

  // Caso 2
  let res2 = http.get('https://reqres.in/api/users/9999');
  check(res2, {
    'GET 404 - status 404': (r) => r.status === 404,
    'GET 404 - cuerpo vacío': (r) => r.body === '{}',
  });

  // Caso 3
  let payload = JSON.stringify({ name: 'Juan', job: 'Estudiante' });
  let headers = { headers: { 'Content-Type': 'application/json' } };
  let res3 = http.post('https://reqres.in/api/users', payload, headers);
  check(res3, {
    'POST - status 201': (r) => r.status === 201,
    'POST - contiene id': (r) => r.body.includes('id'),
  });

  // Caso 4
  let update = JSON.stringify({ name: 'Juan Actualizado', job: 'Tester' });
  let res4 = http.put('https://reqres.in/api/users/2', update, headers);
  check(res4, {
    'PUT - status 200': (r) => r.status === 200,
    'PUT - contiene updatedAt': (r) => r.body.includes('updatedAt'),
  });

  sleep(1);
}