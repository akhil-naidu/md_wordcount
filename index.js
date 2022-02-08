'use strict';

const eejs = require('md_mudoc-lite/node/eejs');
const settings = require('md_mudoc-lite/node/utils/Settings');

exports.eejsBlock_exportColumn = (hookName, args, cb) => {
  args.content += eejs.require('md_wordcount/templates/exportcolumn.html', {}, module);
  return cb();
};

exports.eejsBlock_scripts = (hookName, args, cb) => {
  args.content += eejs.require('md_wordcount/templates/scripts.html', {}, module);
  return cb();
};

exports.eejsBlock_styles = (hookName, args, cb) => {
  args.content += '<link href="../static/plugins/md_wordcount/static/css/stats.css" rel="stylesheet">';
  return cb();
};

exports.eejsBlock_body = (hookName, args, cb) => {
  args.content += eejs.require('md_wordcount/templates/stats.html', {}, module);
  return cb();
};

exports.eejsBlock_mySettings = (hookName, args, cb) => {
  let checkedState;
  if (!settings.md_wordcount_default) {
    checkedState = 'unchecked';
  } else if (settings.md_wordcount_default === true) {
    checkedState = 'checked';
  }
  args.content += eejs.require('md_wordcount/templates/stats_entry.ejs', {checked: checkedState});
  return cb();
};


exports.eejsBlock_dd_view = (hookName, args, cb) => {
  args.content +=
      "<li><a href='#' onClick='$(\"#options-stats\").click();'>Pad Statistics</a></li>";
};
