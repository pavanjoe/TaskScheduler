
const LoginBackground = () => {
    return (
        <>
            <div className="position-absolute d-flex flex-row m-0" style={{height:"100%", width: "100%", left: "0", top: "0", zIndex: "-2"}}>
                <div className='position-relative col-xl-6 col-lg-9 col-0 mx-auto' 
                style={{height: "70%", top: "15%", backgroundColor: "#0a0c27", border: "5px solid #0a0c27", borderRadius: "20px"}}>
                </div>
            </div>
            <div className="position-absolute d-flex flex-row m-0" style={{height:"100%", width: "95%", left: "2.5%", top: "0", zIndex: "-1"}}>
                <div className='position-relative col-xl-6 col-lg-9 col-0 mx-auto' style={{height: "70%", top: "15%"}}>
                    <css-doodle>
                        <style>
                        @grid: 10 / 100% 100% / #0a0c27;
                        background-size: 200px 200px;
                        @shape: clover 5;
                        background: hsla(-@i(*4), 70%, 68%, @r.8);
                        transform:
                        scale(@r(.2, 1.5))
                        translate(@m2.@r(±50%));
                        </style>
                    </css-doodle>
                </div>
            </div>
        </>
    )
}

export default LoginBackground;