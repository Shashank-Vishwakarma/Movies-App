import React from "react";

function Pagination({
    currentPage,
    numberOfPages,
    setCurrentPage
}) {
    // get the page numbers
    let pageNumbers = [];
    for(let i=0; i<numberOfPages; i++) {
        pageNumbers.push(i+1);
    }

    const goToPreviousPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const goToNextPage = () => {
        if(currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return(
        <div className="flex absolute left-[39%] my-6">
            <button 
                className="mx-2"
                onClick={goToPreviousPage}
            >
                <img src="src\images\prev-btn.png" className="w-12"></img>
            </button>
            <ul className="flex justify-center items-center">
                {
                    pageNumbers?.map((pageNumber) => (
                        <li 
                            key={pageNumber} 
                            className={`w-6 px-2 py-2 border text-center ${currentPage===pageNumber ? 'bg-blue-500' : ''}`}
                            onClick={()=> {
                                setCurrentPage(pageNumber)
                            }}
                        >
                            <a href="!#">
                                {pageNumber}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <button 
                className="mx-2"
                onClick={goToNextPage}
            >
                <img src="src\images\next-btn.png" className="w-12"></img>
            </button>
        </div>
    )
}

export default Pagination;