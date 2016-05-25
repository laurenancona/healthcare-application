#!/bin/bash
# For running integration tests in travis.  This should happen any time we merge to staging.

# Run webpack-prod and start server
npm start &

# Wait for server to begin accepting connections
# via http://unix.stackexchange.com/questions/5277
while ! echo exit | nc localhost 3000; do sleep 1; done

nightwatch --config test/e2e/nightwatch.js --env travis