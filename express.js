'use strict';

const eejs = require('md_mudoc-lite/node/eejs');

exports.expressCreateServer = (hookName, args, cb) => {
  args.app.get('/p/:pad/:rev?/export/stats', (req, res, next) => {
    const template = eejs.require('md_wordcount/templates/stats.html');
    res.send(template);
  });
  cb();
};
