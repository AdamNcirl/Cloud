#!/usr/bin/env bash
bundle install
rails db:migrate
rails s -p $PORT -b 0.0.0.0
