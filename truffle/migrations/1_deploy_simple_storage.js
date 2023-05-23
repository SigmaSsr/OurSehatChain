const HealthCareSystem = artifacts.require("HealthCareSystem");

module.exports = function (deployer) {
  deployer.deploy(HealthCareSystem);
};
