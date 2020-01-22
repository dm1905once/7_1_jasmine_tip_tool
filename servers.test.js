describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');

  });

  it('should match the contents of allServers with serverTable on updateServerTable()', function(){
    submitServerInfo();
      expect(document.querySelector("#serverTable tbody tr").id).toEqual('server1');
      expect(document.querySelectorAll("#serverTable tbody tr td")[0].innerText).toEqual('Alice');
      expect(document.querySelectorAll("#serverTable tbody tr td")[1].innerText).toEqual('$0.00');    
  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverTbody.innerHTML = '';
    serverId=0;
  });
});
