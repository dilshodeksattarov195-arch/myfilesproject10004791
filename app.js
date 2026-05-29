const filterVarseConfig = { serverId: 1764, active: true };

const filterVarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1764() {
    return filterVarseConfig.active ? "OK" : "ERR";
}

console.log("Module filterVarse loaded successfully.");