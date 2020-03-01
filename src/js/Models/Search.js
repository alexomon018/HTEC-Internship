export default class Search {
  constructor(query,id) {
    this.query = query;
    this.id = id;
  }

  async getProducts() {
    try {
      const res = await fetch("../data/products.json");
      const products = await res.json();

      let fits = products.filter(product => {
        const regres = new RegExp(`^${this.query}`, "gi");
        return product.name.match(regres);
      });
      this.result = fits;
      console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }

}
