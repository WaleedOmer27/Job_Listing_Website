import { ClipLoader } from "react-spinners"

const override = {
    display: 'block',
    margin: '100px auto',
    borderColor: 'red',
}
const Spinner = ({ loading }) => {
    return (
        <ClipLoader size={50} color={"#123abc"} loading={loading} cssOverride={override} />
    )
}

export default Spinner
