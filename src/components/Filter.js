export const Filter=({onChange})=>(
    <div className="filter_wrapper">
        <select name="height" className="filter-height" onChange={onChange}>
            <option value="0">Select Height</option>
            <option value="100">More than 100 foot</option>
            <option value="200">More than 200 foot</option>
            <option value="300">More than 300 foot</option>
            <option value="400">More than 400 foot</option>
        </select>
    </div>
);    