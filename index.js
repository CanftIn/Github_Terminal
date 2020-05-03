#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

function parseRepo() {
  const [user, repo] = val.split('/')
  return {user, repo}
}
