const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_name: "nextjsblog",
        mongodb_password: "nextjsblog",
        mongodb_clustername: "nextjs-blog",
      },
    };
  }
  // could use different database here for non development environment
  return {
    env: {
      mongodb_name: "nextjsblog",
      mongodb_password: "nextjsblog",
      mongodb_clustername: "nextjs-blog",
    },
  };
};
