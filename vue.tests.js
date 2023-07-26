const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const should = require('chai').should();

const browser = await puppeteer.launch({ headless: false });