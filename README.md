# showlog
Node.JS server for showing realtime logs on server, such as catlina.out for tomcat.

## install
just download, and edit the config.json file.

## config
Edit config file: config.json, is a json typed file encoded with UTF-8.

```json
{
"filePath":"/some/path/to/tomcat/logs/catlina.out",
"port":"8081"
}
```

filePath is the absolute path for logfile.

port is the port for this log server.

## run
```shell
node showlog.js
```

or

```shell
nohup node showlog.js &
```

or use other types you use , such as PM2