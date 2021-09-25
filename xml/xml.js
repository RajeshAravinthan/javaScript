// var xml = `<?xml version='1.0' encoding='UTF-8'?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Body><FgACNTResponseVO xmlns=\"http://receiptInterface.webservices.acnt.rs.firstapex.com/\"><voucherNumber>MVP7379520</voucherNumber><status>FAIL</status><errorDetailVOList><errorCode>E_AC_STLUPLD_0002</errorCode><errorDesc>Voucher already exists in master : EC236042/RECT/MVP7379520</errorDesc></errorDetailVOList></FgACNTResponseVO></soapenv:Body></soapenv:Envelope>`
var xml = `<?xml version='1.0' encoding='UTF-8'?><soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Body><FgACNTResponseVO xmlns=\"http://receiptInterface.webservices.acnt.rs.firstapex.com/\"><voucherNumber>MVP7379521</voucherNumber><status>SUCCESS</status><openingBalance>INR/-5000.00/1</openingBalance><closingBalance>INR/-5000.00/1</closingBalance></FgACNTResponseVO></soapenv:Body></soapenv:Envelope>`

x2js = new X2JS();
var document = x2js.xml2js(xml)

// xml = x2js.js2xml(document);
// console.log(xml);
console.log('*************************************************')
// console.log(JSON.stringify(document))
console.log(document.Envelope.Body)
console.log('*************************************************')