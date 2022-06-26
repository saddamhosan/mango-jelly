
const AddItems = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name =e.target.name.value
        const description = e.target.description.value;
        const ram = e.target.ram.value;
        const internalStorage = e.target.internalStorage.value;
        const screenSize = e.target.screenSize.value;
        const mobile = {
          name,
          description,
          ram,
          internalStorage,
          screenSize,
        };
        console.log(mobile);
    }
    return (
        
      <div>
        <form onSubmit={handleSubmit} className="text-center">
        <h1>AddItems</h1>
          <input
            type="text"
            name="name"
            placeholder="Brand Name"
            className="border-2 rounded-xl w-1/3 p-2 m-2"
          />
          <br />
          <textarea
            name="description"
            placeholder="Description"
            className="border-2 rounded-xl w-1/3 p-2 m-2"
          />
          <br />
          <input
            type="text"
            name="ram"
            placeholder="RAM"
            className="border-2 rounded-xl w-1/3 p-2 m-2"
          />
          <br />
          <input
            type="text"
            name="internalStorage"
            placeholder="Internal Storage"
            className="border-2 rounded-xl w-1/3 p-2 m-2"
          />
          <br />
          <input
            type="text"
            name="screenSize"
            placeholder="Screen Size"
            className="border-2 rounded-xl w-1/3 p-2 m-2"
          />
          <br />
          <input type="submit" value="Add Item" className="btn btn-md" />
        </form>
      </div>
    );
};

export default AddItems;