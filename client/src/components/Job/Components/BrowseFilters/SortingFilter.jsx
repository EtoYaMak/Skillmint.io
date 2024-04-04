// SortingFilter.jsx
function SortingFilter({ handleSortChange }) {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    // Pass the selected value to the parent component
    handleSortChange(selectedValue);
  };

  return (
    <>
      <div className="relative inline-block w-full">
        <select
          id="sort"
          className="font-Poppins rounded-[2px] border-[1px] border-black/40 h-10 sm:h-12 px-4 w-full min-[850px]:w-[155px] text-[14px] sm:text-[16px] font-medium hover:bg-[#ececec]"
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            Sort By
          </option>
          <option value="LATEST">Latest Jobs</option>
          <option value="ASCENDING">A-Z</option>
          <option value="DESCENDING">Z-A</option>
        </select>
      </div>
    </>
  );
}

export default SortingFilter;
