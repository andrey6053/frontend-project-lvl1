install: #Установка проекта
	npm ci
publish: #
	npm publish --dry-run
lint: #Запуск eslint
	npm run lint
eslint: #Запуск eslint
	npx eslint .
brain-game: #Запуск проекта
	node bin/brain-games.js
brain-even: #Запуск проекта
	node bin/brain-even.js
brain-calc: #Запуск проекта
	node bin/brain-calc.js
brain-gcd: #Запуск проекта
	node bin/brain-gcd.js
brain-progression: #Запуск проекта
	node bin/brain-progression.js
brain-prime: #Запуск проекта
	node bin/brain-prime.js