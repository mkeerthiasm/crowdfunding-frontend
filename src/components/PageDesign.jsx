import '../index.css'

function PageDesign({ children }) {
    return (
        <div className='page'>
            <div className='page-content'>
                {children}
            </div>
        </div>
    );
}

export default PageDesign;