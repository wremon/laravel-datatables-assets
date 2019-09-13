# WIP: Laravel DataTables Assets

A collection of DataTables server-side scripts.

## Installation

`yarn add https://github.com/yajra/laravel-datatables-assets`


## Buttons Assets

```js
require('laravel-datatables-assets/js/dataTables.buttons');
```

### Laravel Integration

```php
use Yajra\DataTables\Html\Button;

Button::make('create')->editor('editor'),
Button::make('edit')->editor('editor'),
Button::make('remove')->editor('editor'),
Button::make('duplicate'),
Button::make('export'),
Button::make('print'),
Button::make('reset'),
Button::make('reload'),
```

## Renderers Assets

```js
require('laravel-datatables-assets/js/dataTables.renderers');
```

### Laravel Integration

```php
use Yajra\DataTables\Html\Column;

Column::make('deleted_at')->render('$.fn.dataTable.render.boolean()'),
Column::make('post_count')->render('$.fn.dataTable.render.badge()'),
```