-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2024 at 09:23 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_node_task_2`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` bigint(21) NOT NULL,
  `first_name` varchar(64) NOT NULL,
  `last_name` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `role` enum('Admin','Employee') NOT NULL,
  `token` varchar(128) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `first_name`, `last_name`, `email`, `password`, `gender`, `role`, `token`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Jaydeepsinh', 'Zala', 'jaydeep@gmail.com', '3c4e2cc3ad9ff9473a53ed4825ed5a90', 'Male', 'Admin', 'JHKhsJ7D7J', 1, '2024-05-21 11:04:35', '2024-05-27 08:51:10'),
(2, 'Jaydeepsinh', 'Zala', 'jaydeep1@gmail.com', '3c4e2cc3ad9ff9473a53ed4825ed5a90', 'Male', 'Admin', '', 1, '2024-05-21 11:08:27', '2024-05-23 11:09:57'),
(3, 'Jaydeepsinh', 'Zala', 'jaydeep2@gmail.com', '3c4e2cc3ad9ff9473a53ed4825ed5a90', 'Male', 'Admin', '77MCjjmcFsxUJ4O', 1, '2024-05-21 11:09:13', '2024-05-21 11:09:13'),
(4, 'Sahil', 'Chunara', 'sahil@gmail.com', '8c7eef0f49a87887736c24551d01e649', 'Male', 'Employee', '', 1, '2024-05-21 11:15:40', '2024-05-27 05:39:17'),
(5, 'Devarsh', 'Panchal', 'devarsh@gmail.com', 'e80c9930d5e56f8d6a59d0be716d265c', 'Male', 'Employee', 'Dj3uf5RKIrvIJDy', 1, '2024-05-21 11:17:11', '2024-05-24 07:07:05'),
(6, 'Akhil Bhai', 'Gohel', 'akhil@gmail.com', '67eab3371215e0bfd39d5b7111b1e031', 'Male', 'Employee', 'uKDPwUr89md8htf', 1, '2024-05-21 11:19:13', '2024-05-27 11:14:59'),
(7, 'Aditya Bhai', 'Patel', 'aditya@gmail.com', 'a61a2c6020554f873338fd2e9aa1f030', 'Male', 'Employee', 'U6wafQUunRDVHTV', 1, '2024-05-23 11:45:02', '2024-05-27 08:43:17'),
(8, 'Parth bhai', 'Patel', 'parth@gmail.com', 'f12364e5a022cc93b14edc97d496b9bc', 'Male', 'Employee', '', 1, '2024-05-23 11:50:43', '2024-05-27 11:14:42'),
(9, 'Vatsal', 'Patel', 'vatsal@gmail.com', 'fd5f6a349ebe4ae7cf7e16a4e02754f3', 'Male', 'Admin', '', 1, '2024-05-24 04:18:07', '2024-05-27 08:51:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` bigint(21) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
