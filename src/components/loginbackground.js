
const LoginBackground = () => {
    return (
        <>
            <div className="position-absolute d-flex flex-row m-0" 
            style={{height:"100%", width: "100%", left: "0", top: "0", zIndex: "-2", backgroundImage: "linear-gradient(to bottom right, #001025, #7298b4)"}}>
                <div className='position-relative col-xl-6 col-lg-9 col-0 mx-auto' 
                style={{height: "70%", top: "15%", backgroundColor: "#0a0c27", border: "5px solid #0a0c27", borderRadius: "20px"}}>
                </div>
            </div>
            <div className="position-absolute d-flex flex-row m-0" style={{height:"100%", width: "95%", left: "2.5%", top: "0", zIndex: "-1"}}>
                <div className='position-relative col-xl-6 col-lg-9 col-0 mx-auto' style={{height: "70%", top: "15%", animation: "fadeIn 1s"}}>
                    <css-doodle click-to-update>
                        {`
                            :doodle {
                                @grid: 20x14 / 100% 100% / #0a0c27;
                                @grid-gap: 0px;
                            }
                            @random {
                                border-left: 1px solid #5d81bc;
                            }
                            @random {
                                border-top: 1px solid #5d81bc;
                            }
                            @random(.25) {
                                background: linear-gradient(
                                    @p(#fff, tan, #5d81bc), @lp
                                )
                                50% / @r(60%) @lr
                                no-repeat;
                            }
                            @random {
                                filter: drop-shadow(0 0 10px #fff);
                            }
                        `}
                    </css-doodle>
                </div>
            </div>
        </>
    )
}

export default LoginBackground;