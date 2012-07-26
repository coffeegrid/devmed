if [ "$NODE_ENV" == "production" ]; then
  node web.js
else
  supervisor web.js
fi