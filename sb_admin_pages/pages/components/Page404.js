import React from 'react';

const Page404 = () => {
    return <div className="container-fluid">
        {/* <!-- Begin Page Content --> */}
        {/* <!-- 404 Error Text --> */}
        <div className="text-center">
            <div className="error mx-auto" data-text="404">404</div>
            <p className="lead text-gray-800 mb-5">Page Not Found</p>
            <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
            {/* <a href="/">&larr; Back to Dashboard</a> */}
        </div>

    </div>
    {/* <!-- /.container-fluid --> */ }

}



export default Page404;