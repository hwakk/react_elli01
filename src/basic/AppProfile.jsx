import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("click");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        image="https://images.unsplash.com/photo-1668445887324-01e567865903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1668445887324-01e567865903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        name="aidanasahari"
        title="프론트엔드"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1667833492277-498cec5221f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        name="Anna Young"
        title="백엔드 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1668573181886-19a428f1bc11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        name="Yuna Kim"
        title="프론트엔드 개발자"
      />
    </>
  );
}

export default AppProfile;
