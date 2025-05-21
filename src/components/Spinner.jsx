import { MoonLoader } from "react-spinners";

const Spinner = ({loading}) => {

    const override = {
        display:"block",
        margin: "100px auto"
    }

    return (
        <MoonLoader loading={loading}
            color="#7636d2"
            cssOverride={override}
            size={150}
        />
    );
}

export default Spinner;