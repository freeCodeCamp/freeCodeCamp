---
title: MySQLi
localeTitle: MySQLi
---
## Класс mysqli
(PHP 5, PHP 7)
## Введение
Представляет связь между PHP и базой данных MySQL. 
## Обзор классов 
```
 mysqli {
/* Свойства */
int $affected_rows;
int $connect_errno;
string $connect_error;
int $errno;
array $error_list;
string $error;
int $field_count;
string $client_info;
int $client_version;
string $host_info;
string $protocol_version;
string $server_info;
int $server_version;
string $info;
mixed $insert_id;
string $sqlstate;
int $thread_id;
int $warning_count;
/* Методы */
__construct ([ string $host = ini_get("mysqli.default_host") [, string $username = ini_get("mysqli.default_user") [, string $passwd = ini_get("mysqli.default_pw") [, string $dbname = "" [, int $port = ini_get("mysqli.default_port") [, string $socket = ini_get("mysqli.default_socket") ]]]]]] )
bool autocommit ( bool $mode )
bool change_user ( string $user , string $password , string $database )
string character_set_name ( void )
bool close ( void )
bool commit ([ int $flags [, string $name ]] )
void connect ([ string $host = ini_get("mysqli.default_host") [, string $username = ini_get("mysqli.default_user") [, string $passwd = ini_get("mysqli.default_pw") [, string $dbname = "" [, int $port = ini_get("mysqli.default_port") [, string $socket = ini_get("mysqli.default_socket") ]]]]]] )
bool debug ( string $message )
bool dump_debug_info ( void )
object get_charset ( void )
string get_client_info ( void )
bool get_connection_stats ( void )
string mysqli_stmt::get_server_info ( void )
mysqli_warning get_warnings ( void )
mysqli init ( void )
bool kill ( int $processid )
bool more_results ( void )
bool multi_query ( string $query )
bool next_result ( void )
bool options ( int $option , mixed $value )
bool ping ( void )
public static int poll ( array &$read , array &$error , array &$reject , int $sec [, int $usec ] )
mysqli_stmt prepare ( string $query )
mixed query ( string $query [, int $resultmode = MYSQLI_STORE_RESULT ] )
bool real_connect ([ string $host [, string $username [, string $passwd [, string $dbname [, int $port [, string $socket [, int $flags ]]]]]]] )
string escape_string ( string $escapestr )
string real_escape_string ( string $escapestr )
bool real_query ( string $query )
public mysqli_result reap_async_query ( void )
public bool refresh ( int $options )
bool rollback ([ int $flags [, string $name ]] )
int rpl_query_type ( string $query )
bool select_db ( string $dbname )
bool send_query ( string $query )
bool set_charset ( string $charset )
bool set_local_infile_handler ( mysqli $link , callable $read_func )
bool ssl_set ( string $key , string $cert , string $ca , string $capath , string $cipher )
string stat ( void )
mysqli_stmt stmt_init ( void )
mysqli_result store_result ([ int $option ] )
mysqli_result use_result ( void )
}
```
## Содержание
* **mysqli::$affected_rows** — Получает число строк, затронутых предыдущей операцией MySQL
* **mysqli::autocommit** — Включает или отключает автоматическую фиксацию изменений базы данных
* **mysqli::begin_transaction** — Стартует транзакцию
* **mysqli::change_user** — Позволяет сменить пользователя подключенного к базе данных
* **mysqli::character_set_name** — Возвращает кодировку по умолчанию, установленную для соединения с БД
* **mysqli::close** — Закрывает ранее открытое соединение с базой данных
* **mysqli::commit** — Фиксирует текущую транзакцию
* **mysqli::$connect_errno** — Возвращает код ошибки последней попытки соединения
* **mysqli::$connect_error** — Возвращает описание последней ошибки подключения
* **mysqli::__construct** — Устанавливает новое соединение с сервером MySQL
* **mysqli::debug** — Выполняет процедуры отладки
* **mysqli::dump_debug_info** — Журналирование отладочной информации
* **mysqli::$errno** — Возвращает код ошибки последнего вызова функции
* **mysqli::$error_list** — Возвращает список ошибок выполнения последней запущенной команды
* **mysqli::$error** — Возвращает строку с описанием последней ошибки
* **mysqli::$field_count** — Возвращает число столбцов, затронутых последним запросом
* **mysqli::get_charset** — Возвращает объект, описывающий кодировку
* **mysqli::$client_info** — Получает информацию о клиенте MySQL
* **mysqli::$client_version** — Возвращает информацию о клиенте MySQL в виде строки
* **mysqli::get_connection_stats** — Возвращает статистику соединения с клиентом
* **mysqli::$host_info** — Возвращает строку, содержащую тип используемого соединения
* **mysqli::$protocol_version** — Возвращает версию используемого MySQL протокола
* **mysqli::$server_info** — Возвращает версию MySQL сервера
* **mysqli::$server_version** — Возвращает версию сервера MySQL, представленную в виде integer
* **mysqli::get_warnings** — Получает результат SHOW WARNINGS
* **mysqli::$info** — Извлекает информацию о последнем выполненном запросе
* **mysqli::init** — Инициализирует MySQLi и возвращает ресурс для использования в функции mysqli_real_connect()
* **mysqli::$insert_id** — Возвращает автоматически генерируемый ID, используя последний запрос
* **mysqli::kill** — Запрос для сервера завершить выполнение процесса MySQL
* **mysqli::more_results** — Проверка, есть ли еще результаты в мультизапросе
* **mysqli::multi_query** — Выполняет запрос к базе данных
* **mysqli::next_result** — Подготовка следующего доступного результирующего набора из multi_query
* **mysqli::options** — Установка настроек
* **mysqli::ping** — Проверяет работоспособность соединения или пытается переподключиться, если соединение разорвано
* **mysqli::poll** — Опрос подключений
* **mysqli::prepare** — Подготавливает SQL выражение к выполнению
* **mysqli::query** — Выполняет запрос к базе данных
* **mysqli::real_connect** — Устанавливает соединение с сервером mysql
* **mysqli::real_escape_string** — Экранирует специальные символы в строке для использования в SQL-выражении, используя текущий набор символов соединения
* **mysqli::real_query** — Выполнение SQL запроса
* **mysqli::reap_async_query** — Получение результата асинхронного запроса
* **mysqli::refresh** — Обновление
* **mysqli::release_savepoint** — Удаляет именованную точку сохранения из списка точек сохранения текущей транзакции
* **mysqli::rollback** — Откат текущей транзакции
* **mysqli::rpl_query_type** — Возвращает RPL тип запроса
* **mysqli::savepoint** — Устанавливает именованную точку отката для текущей транзакции
* **mysqli::select_db** — Устанавливает базу данных для выполняемых запросов
* **mysqli::send_query** — Отправка запроса и возврат
* **mysqli::set_charset** — Задает набор символов по умолчанию
* **mysqli::set_local_infile_default** — Отмена привязки callback-функции для команды load local infile
* **mysqli::set_local_infile_handler** — Задает callback-функцию для команды LOAD DATA LOCAL INFILE
* **mysqli::$sqlstate** — Возвращает код состояния SQLSTATE последней MySQL операции
* **mysqli::ssl_set** — Используется для установления безопасных соединений, используя SSL
* **mysqli::stat** — Получение информации о текущем состоянии системы
* **mysqli::stmt_init** — Инициализирует запрос и возвращает объект для использования в mysqli_stmt_prepare
* **mysqli::store_result** — Передает на клиента результирующий набор последнего запроса
* **mysqli::$thread_id** — Возвращает ID процесса текущего подключения
* **mysqli::thread_safe** — Показывает, безопасна ли работа с процессами
* **mysqli::use_result** — Готовит результирующий набор на сервере к использованию
* **mysqli::$warning_count** — Возвращает количество предупреждений из последнего запроса заданного подключения
