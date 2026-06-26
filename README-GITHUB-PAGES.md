# TengokuFirst Site: GitHub Pages инструкция

## Что уже лежит в `C:\web`
- `index.html` — готовая главная страница сайта.
- `assets/styles.css` — стили сайта.
- `assets/app.js` — логика вкладок и конфигурации ссылок.
- `assets/site-config.js` — файл, где меняются ссылки на релизы без правки HTML.
- `assets/server-icon.png` — иконка в левом верхнем углу.
- `assets/Create-SMP.mrpack` — локальная копия modpack.
- `assets/ElyPrismLauncher.zip` — ZIP-лаунчер для первой публикации.
- `CNAME` — файл для GitHub Pages с доменом `www.tengokufirst.ru`.

## Как выложить сайт с нуля
1. Создай GitHub-аккаунт, если его ещё нет.
2. Нажми `New repository`.
3. Назови репозиторий, например `tengokufirst-site`.
4. Загрузи в репозиторий всё содержимое папки `C:\web`, кроме самой папки `ElyPrismLauncher`.
5. Убедись, что в репозитории есть `index.html`, папка `assets` и файл `CNAME`.
6. Открой вкладку `Releases` и создай новый релиз.
7. Прикрепи к релизу:
   - `assets/ElyPrismLauncher.zip`
   - `assets/Create-SMP.mrpack`
8. После публикации релиза скопируй прямые ссылки на оба файла.
9. Открой `assets/site-config.js` и замени:
   - `zipReleaseUrl`
   - `mrpackReleaseUrl`
   на реальные ссылки из релиза.
10. Закоммить изменения.
11. Открой `Settings -> Pages`.
12. В `Build and deployment` выбери:
   - `Deploy from a branch`
   - branch `main`
   - folder `/ (root)`
13. Дождись адреса вида `username.github.io/repository`.
14. В панели домена создай DNS `CNAME`:
   - host: `www`
   - value: `USERNAME.github.io`
15. В `Settings -> Pages` укажи custom domain `www.tengokufirst.ru`.
16. Дождись, пока GitHub подтвердит домен и включит HTTPS.

## Что важно не трогать
- `smp.tengokufirst.ru` остаётся адресом сервера и подписью в шапке.
- `www.tengokufirst.ru` — это адрес сайта.
- Если обновишь ZIP или `.mrpack`, сайт править не надо: достаточно заменить файлы в релизе и при необходимости обновить URL в `assets/site-config.js`.
