import css from '../Pagination/Pagination.module.css';

function Paginate(params: type) {
  return (
    <p>jgl;</p>
    // GET https://notehub-public.goit.study/api/notes?page=1&perPage=12
  );
}

export default Paginate;
// GET https://notehub-public.goit.study/api/notes?page=1&perPage=12
// Бекенд завжди повертає пагіновану колекцію нотаток. Тому потрібно додати до компонента App компонент Pagination, який надає користувачеві можливість перемикатися між сторінками колекції. Реалізуйте компонент Pagination з використанням бібліотеки React Paginate.

// До http-запиту потрібно додати параметри page та perPage. Наприклад:
// GET https://notehub-public.goit.study/api/notes?page=1&perPage=12
// Додайте умову, щоб компонент Pagination рендерився лише в тому випадку, якщо кількість сторінок колекції нотаток більше 1.
