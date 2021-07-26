import useBoolean from "./useBoolean";






export default function useLoading() {
    


    const { boolean, setToFalse, setToTrue } = useBoolean(true)
    

    return {
        loadingState: boolean,
        setLoadingStateToTrue: setToTrue,
        setLoadingStateToFalse: setToFalse,
    }

}