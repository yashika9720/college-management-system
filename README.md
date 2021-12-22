# college-management-system

This is a Collage Management System in this project student can add courses and sports 

# Technologies
- [Express](https://expressjs.com/)
- [Mysql](https://www.mysql.com/)
- [Ejs](https://ejs.co/)

# Installation

Prerequisites
```
$ npm install express
$ npm install mysql
$ npm install ejs
```

Project
```
$ Git clone https://github.com/yashika9720/college-management-system.git
```

# Schema
-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2021 at 02:32 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `college`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `cs_id` int(11) NOT NULL,
  `cs_name` varchar(20) NOT NULL,
  `cs_fee` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`cs_id`, `cs_name`, `cs_fee`) VALUES
(6, 'Animation and design', '50,000'),
(7, 'commerce', '1,50,000'),
(8, 'Arts', '30,000'),
(9, 'computer IT', '1,00,000'),
(10, 'Hospitality', '50,000');

-- --------------------------------------------------------

--
-- Table structure for table `sports`
--

CREATE TABLE `sports` (
  `sp_id` int(11) NOT NULL,
  `sp_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sports`
--

INSERT INTO `sports` (`sp_id`, `sp_name`) VALUES
(4, 'BasketBall'),
(3, 'Carrom'),
(1, 'Cricket'),
(2, 'Football'),
(5, 'Hockey'),
(6, 'Table Tennis');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `st_id` int(11) NOT NULL,
  `uname` varchar(20) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`st_id`, `uname`, `phone`, `email`, `city`) VALUES
(58, 'yashika', '9410356415', 'yashika@gmail.com', 'kichha'),
(61, 'mansi', '9988889988', 'mansi@gmail.com', 'haridwar'),
(63, 'test1', '6766776633', 'test1@gmail.com', 'kichha'),
(65, 'chirag takkar', '8998121122', 'chirag@gmail.com', 'mohali'),
(66, 'preeti', '3344444333', 'preeti@gmail.com', 'nainital'),
(67, 'preetiiii', '334444433366', 'priieeti@gmail.com', 'nainital'),
(68, 'test4', '941035641522', 'test4@gmail.com', 'mohali'),
(69, 'nnnn', '244422422442', 'nn@gmail.com', 'kichha'),
(70, 'yashika gupta', '0941035641566', 'yashigupt8@gmail.com', 'mohali'),
(71, 'avnit virk', '08126330137766', 'yashigupta698@gma', 'kichha'),
(72, 'test5', '673874981787', 'test5@gmail.com', 'kichha');

-- --------------------------------------------------------

--
-- Table structure for table `student_course_map`
--

CREATE TABLE `student_course_map` (
  `sc_id` int(11) NOT NULL,
  `st_id` int(20) NOT NULL,
  `cs_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_course_map`
--

INSERT INTO `student_course_map` (`sc_id`, `st_id`, `cs_id`) VALUES
(37, 58, 9),
(39, 61, 6),
(41, 63, 6),
(43, 65, 9),
(44, 66, 9),
(46, 68, 8),
(47, 69, 6),
(48, 70, 6),
(49, 71, 6),
(50, 72, 7);

-- --------------------------------------------------------

--
-- Table structure for table `student_sport_map`
--

CREATE TABLE `student_sport_map` (
  `ss_id` int(11) NOT NULL,
  `st_id` int(11) NOT NULL,
  `sp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_sport_map`
--

INSERT INTO `student_sport_map` (`ss_id`, `st_id`, `sp_id`) VALUES
(15, 58, 4),
(17, 61, 5),
(19, 63, 4),
(21, 65, 5),
(22, 66, 4),
(23, 66, 2),
(24, 61, 2),
(25, 69, 4),
(26, 70, 4),
(27, 71, 4),
(28, 71, 3),
(36, 61, 3),
(37, 72, 2);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `te_id` int(11) NOT NULL,
  `te_name` varchar(20) NOT NULL,
  `te_phone` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`te_id`, `te_name`, `te_phone`) VALUES
(1, 'Ashish', '9123432134'),
(2, 'Chhavinav', '9870098723'),
(3, 'Suresh', '98900223388');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_course_map`
--

CREATE TABLE `teacher_course_map` (
  `tc_id` int(11) NOT NULL,
  `cs_id` int(11) NOT NULL,
  `te_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher_course_map`
--

INSERT INTO `teacher_course_map` (`tc_id`, `cs_id`, `te_id`) VALUES
(1, 2, 1),
(2, 3, 2),
(3, 4, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`cs_id`),
  ADD KEY `amt` (`cs_fee`);

--
-- Indexes for table `sports`
--
ALTER TABLE `sports`
  ADD PRIMARY KEY (`sp_id`),
  ADD KEY `sp_name` (`sp_name`),
  ADD KEY `sp_id` (`sp_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`st_id`),
  ADD UNIQUE KEY `st_phone` (`phone`),
  ADD UNIQUE KEY `st_email` (`email`),
  ADD KEY `st_phone_2` (`phone`);

--
-- Indexes for table `student_course_map`
--
ALTER TABLE `student_course_map`
  ADD PRIMARY KEY (`sc_id`),
  ADD KEY `st_id` (`st_id`),
  ADD KEY `cs_id` (`cs_id`);

--
-- Indexes for table `student_sport_map`
--
ALTER TABLE `student_sport_map`
  ADD PRIMARY KEY (`ss_id`),
  ADD KEY `st_id` (`st_id`),
  ADD KEY `sp_id` (`sp_id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`te_id`);

--
-- Indexes for table `teacher_course_map`
--
ALTER TABLE `teacher_course_map`
  ADD PRIMARY KEY (`tc_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `cs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `sports`
--
ALTER TABLE `sports`
  MODIFY `sp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `st_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `student_course_map`
--
ALTER TABLE `student_course_map`
  MODIFY `sc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `student_sport_map`
--
ALTER TABLE `student_sport_map`
  MODIFY `ss_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `te_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `teacher_course_map`
--
ALTER TABLE `teacher_course_map`
  MODIFY `tc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `student_course_map`
--
ALTER TABLE `student_course_map`
  ADD CONSTRAINT `student_course_map_ibfk_1` FOREIGN KEY (`st_id`) REFERENCES `student` (`st_id`),
  ADD CONSTRAINT `student_course_map_ibfk_2` FOREIGN KEY (`st_id`) REFERENCES `student` (`st_id`),
  ADD CONSTRAINT `student_course_map_ibfk_3` FOREIGN KEY (`cs_id`) REFERENCES `courses` (`cs_id`);

--
-- Constraints for table `student_sport_map`
--
ALTER TABLE `student_sport_map`
  ADD CONSTRAINT `student_sport_map_ibfk_1` FOREIGN KEY (`st_id`) REFERENCES `student` (`st_id`),
  ADD CONSTRAINT `student_sport_map_ibfk_2` FOREIGN KEY (`sp_id`) REFERENCES `sports` (`sp_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;





# Steps To Use
- In this project we provide one schema of database use it in your mysql database.
- Then go to the connection file and enter your database information like username, password, server etc.
- Go to the dashboard and then click on student registration
- Fill the information like name email etc and submit it after submitting page automatically redirect to display page.
- From dashboard you can add sports... just click on addcourse button and enter the information and submit it 
- From dashboard you can see detail by clicking on show detail button


