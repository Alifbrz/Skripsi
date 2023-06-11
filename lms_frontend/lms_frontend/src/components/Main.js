//Main

import Home from './Home'
import Header from './Header'
import CourseDetail from './CourseDetail'
import About from './About'
import Footer from './Footer'
import TeacherDetail from './TeacherDetail'
import AllCourse from './AllCourse'
import PopularCourse from './PopularCourse'
import CategoryCourse from './CategoryCourse'



// User

import Login from './User/Login'
import Register from './User/Register'
import Dashboard from './User/Dashboard'
import MyCourse from './User/MyCourse'
import FavouriteCourse from './User/FavouriteCourse'
import RecomendedCourse from './User/RecomendedCourse'
import ProfileSetting from './User/ProfileSetting'
import ChangePassword from './User/ChangePassword'

// Teacher
import TeacherLogin from './Teacher/TeacherLogin'
import TeacherLogout from './Teacher/TeacherLogout'
import TeacherRegister from './Teacher/TeacherRegister'
import TeacherDashboard from './Teacher/TeacherDashboard'
import TeacherCourse from './Teacher/TeacherCourse'
import AddCourse from './Teacher/AddCourse'
import MyStudent from './Teacher/MyStudent'
import TeacherProfileSetting from './Teacher/TeacherProfileSetting'
import TeacherChangePassword from './Teacher/TeacherChangePassword'
import PopularTeacher from './PopularTeacher'


import {Routes as Switch, Route} from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-register" element={<Register />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/my-course" element={<MyCourse />} />
        <Route path="/favourite-course" element={<FavouriteCourse />} />
        <Route path="/recomended-course" element={<RecomendedCourse />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/teacher-logout" element={<TeacherLogout />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher-course" element={<TeacherCourse />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/my-student" element={<MyStudent />} />
        <Route path="/teacher-profile-setting" element={<TeacherProfileSetting />} />
        <Route path="/teacher-change-password" element={<TeacherChangePassword />} />
        <Route path="/teacher-detail" element={<TeacherDetail />} />
        <Route path="/all-course" element={<AllCourse />} />
        <Route path="/popular-course" element={<PopularCourse />} />
        <Route path="/popular-teacher" element={<PopularTeacher />} />
        <Route path="/category/:category_slug" element={<CategoryCourse />} />











      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
