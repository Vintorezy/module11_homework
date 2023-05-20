Задание 2. Выбрать любую реализованную функцию из тренажера JavaScript, раздел «Функции»

добавить ее в репозиторий;
продумать тест-кейсы (успешное/неуспешное выполнение функции);
продумать корнер-кейсы; 
написать unit-тесты (минимум 3).

Функция:
const fromEntries = entries => {
	const obj = {};
  entries.forEach(entry => {
  	obj[entry[0]] = entry[1];
  })
  return obj;
}

console.log( fromEntries([
	['key2', 3],
  ['key1', 'hello'],
]) )
