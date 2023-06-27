exports.default = series(scssTask, jsTask, browserSyncServer, watchTask);

exports.build = series(scssTask, jsTask);
