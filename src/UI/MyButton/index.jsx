export const MyButton = ({ label, mini=false, onClick=()=>{} }) => {
    return (
        <button onClick={onClick} className={`my-button ${mini ? 'mini' : ''}`}>{label}</button>
    );
}

export default MyButton;