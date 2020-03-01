export default class Id {
  constructor(id) {
    this.id = id;
  }

  async getProductByID() {
    try {
      const res = await fetch("../data/products.json");
      const products = await res.json();
      let obj = products.map(obj => obj.id == this.id);
      this.id = obj;
    } catch (error) {
      alert(error);
    }

 
  }
}