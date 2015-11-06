Angular skeleton
----------------

Angular skeleton application for coffee script language and less. To quickly and easily launch applications.
The application allows you to start quickly and easily adjust to fit your needs.

#### init
    
command for environment initial
    
```bash
    ./build.sh init             
```
    
start gulp tasks
    
```bash
delta54@darkstar:~/workspace/JavaScript/angular-skeleton$ gulp
[22:38:50] Using gulpfile ~/workspace/JavaScript/angular-skeleton/gulpfile.js
[22:38:50] Starting 'default'...
[22:38:50] Starting 'build_lib_js'...
[22:38:50] Finished 'build_lib_js' after 44 ms
[22:38:50] Starting 'build_coffee_js'...
[22:38:50] Finished 'build_coffee_js' after 35 ms
[22:38:50] Starting 'build_lib_css'...
[22:38:50] Finished 'build_lib_css' after 15 ms
[22:38:50] Starting 'build_less'...
[22:38:50] Finished 'build_less' after 439 ms
[22:38:50] Starting 'webserver'...
Server listening on http://localhost:8080
[22:38:50] Finished 'webserver' after 8.54 ms
[22:38:50] Starting 'watch'...
[22:38:50] Finished 'watch' after 9.89 ms

```

pack gulp command

```bash
delta54@darkstar:~/workspace/JavaScript/angular-skeleton$ gulp pack
[22:38:34] Using gulpfile ~/workspace/JavaScript/angular-skeleton/gulpfile.js
[22:38:34] Starting 'pack'...
[22:38:34] Starting 'build_lib_js'...
[22:38:34] Finished 'build_lib_js' after 44 ms
[22:38:34] Starting 'build_coffee_js'...
[22:38:34] Finished 'build_coffee_js' after 50 ms
[22:38:34] Starting 'build_lib_css'...
[22:38:34] Finished 'build_lib_css' after 17 ms
[22:38:34] Starting 'build_less'...
[22:38:35] Finished 'build_less' after 451 ms

```


clear project
    
```bash
    ./build.sh clear             
```
    
#### LICENSE

Angular skeleton is licensed under the [MIT License (MIT)](https://github.com/e154/angular-skeleton/blob/master/LICENSE)
