-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2023 at 12:34 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `20it0534`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `role` varchar(15) NOT NULL,
  `nic` varchar(15) NOT NULL,
  `password` varchar(30) NOT NULL,
  `stuid` varchar(20) NOT NULL,
  `fname` varchar(15) NOT NULL,
  `lname` varchar(15) NOT NULL,
  `email` varchar(25) NOT NULL,
  `mobile` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `role`, `nic`, `password`, `stuid`, `fname`, `lname`, `email`, `mobile`) VALUES
(14, 'teacher', '197010101010', 'abcdefg', '', 'Hansini', 'Jayathilake', 'hansinij@gmail.com', 771234567),
(15, 'student', '1999200534', 'AKD534', '20it0534', 'Daud', 'Sha', 'daudsha@gmail.com', 762891717);

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `id` int(11) NOT NULL,
  `stuid` varchar(15) NOT NULL,
  `sub_name` varchar(50) NOT NULL,
  `mark` float NOT NULL,
  `grade` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `stuid`, `sub_name`, `mark`, `grade`) VALUES
(23, '20IT0452', 'IT1101 - Applied Science', 85, 'A'),
(24, '20IT0452', 'IT1102 - Business Application', 69, 'B'),
(26, '20IT0452', 'IT1104 - Database Management', 90, 'A'),
(27, '20IT0452', 'IT1105 - Digital Computer', 40, 'C'),
(28, '20IT0452', 'IT1106 - Programming', 70, 'B'),
(30, '20IT0453', 'IT1101 - Applied Science', 70, 'B'),
(31, '20IT0453', 'IT1105 - Digital Computer', 68, 'B'),
(32, '20IT0453', 'IT1106 - Programming', 80, 'A');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nic` (`nic`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `idx_` (`stuid`,`sub_name`),
  ADD KEY `sub_name` (`sub_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
