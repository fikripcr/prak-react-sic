import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import productsData from "../data/Products.json";

export default function Products() {
  return (
    <div id="dashboard-container">
      <PageHeader title="Products" />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Code</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Brand</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Stock</th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border text-center">{item.id}</td>
                  <td className="px-4 py-2 border">
                        <Link to={`/products/${item.id}`} className="text-emerald-400 hover:text-emerald-500">
                              {item.tittle}
                        </Link>
                  </td>
                  <td className="px-4 py-2 border">{item.code}</td>
                  <td className="px-4 py-2 border">{item.category}</td>
                  <td className="px-4 py-2 border">{item.brand}</td>
                  <td className="px-4 py-2 border">
                    Rp {item.price.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border text-center">{item.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
