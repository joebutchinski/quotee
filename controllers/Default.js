'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.quoteRandomGET = function quoteIdGET (req, res, next) {
  Default.quoteRandomGET(req.swagger.params, res, next);
};

module.exports.quoteIdGET = function quoteIdGET (req, res, next) {
  Default.quoteIdGET(req.swagger.params, res, next);
};

module.exports.quotes = function quotes (req, res, next) {
  Default.quotes(req.swagger.params, res, next);
};

module.exports.quotesForTagIdGET = function quotesForTagIdGET (req, res, next) {
  Default.quotesForTagIdGET(req.swagger.params, res, next);
};

module.exports.tags = function tags (req, res, next) {
  Default.tags(req.swagger.params, res, next);
};

module.exports.tagsForQuoteIdGET = function tagsForQuoteIdGET (req, res, next) {
  Default.tagsForQuoteIdGET(req.swagger.params, res, next);
};

module.exports.slackrandomPOST = function slackrandomPOST (req, res, next) {
  Default.slackrandomPOST(req.swagger.params, res, next);
};

module.exports.searchquotesGET = function searchquotesGET (req, res, next) {
  Default.searchquotesGET(req.swagger.params, res, next);
};