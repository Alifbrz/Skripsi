function TeacherLogout(){
    localStorage.getItem('teacherLoginStatus')
    window.location.href='/teacher-login';
    
    return(
        <div></div>
    )
};
export default TeacherLogout;