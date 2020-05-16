const dns = require("dns");

const about = {
  Address: "",
  Family: "",
};

// search info about domain
const getDomainInfo = (domain) =>
  dns.lookup(String(domain), (err, ...rest) => {
    if (err) throw err;

    const [ads, fml] = rest;
    about.Address = ads;
    about.Family = fml;

    console.table(about);
  });

// searche all ips with  references in a domain.
// Return the reverse ips
const getReverseDomains = (domain) =>
  dns.resolve4(String(domain), (err, addresses) => {
    if (err) throw err;

    console.log(`addresses: ${JSON.stringify(addresses)}`);

    addresses.forEach((a) => {
      dns.reverse(a, (err, hostnames) => {
        if (err) {
          console.warn(err.message);
          return;
        }
        console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
      });
    });
  });

getReverseDomains("facebook.com");
