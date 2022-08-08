install: #Установка проекта
	npm ci
brain-game: #Запуск проекта
	node bin/brain-games.js
brain-even: #Запуск проекта
	node bin/brain-even.mjs
brain-calc: #Запуск проекта
	node bin/brain-calc.mjs
publish: #
	npm publish --dry-run
lint: #Запуск eslint
	npm run lint
eslint: #Запуск eslint
	npx eslint .