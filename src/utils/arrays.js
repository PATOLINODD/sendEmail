class Obj {
    static getKeys = (obj) =>{
        return Object.keys(obj);
    }
    static create =(obj, target, except)=>{
        const sample = `/[${target}][^${except}]/`;
        const regex = new RegExp(sample);
        return this.getKeys(obj).join(', ').replace(regex, '?');
    }
}

module.exports = Obj
