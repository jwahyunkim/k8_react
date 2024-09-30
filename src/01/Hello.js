function Hello() {
    let today = new Date();
    today = today.toLocaleString();

    let name = 'pnu';
    return (
        <>
            <p className='p1'>
                Hello React!!
            </p>
            <p className="text-4xl  text-emerald-500">
                {name === "pnu" ? '부산대학교 김좌현' : "김좌현"}
            </p>
            <p style={{ backgroundColor: "black", color: "white" }}>
                {/* {new Date().toLocaleString} */}
                {today}
            </p>
        </>

    );
}

export default Hello;