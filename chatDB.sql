-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2021 at 08:34 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `online`
--

CREATE TABLE `online` (
  `id` int(10) NOT NULL,
  `nick` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `waktu` time NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `online`
--

INSERT INTO `online` (`id`, `nick`, `waktu`) VALUES
(44, 'hudhud', '07:12:22'),
(45, 'hudhud', '07:12:43'),
(46, 'WAHYULOG', '08:12:56'),
(47, 'wahyulog', '08:12:12'),
(48, 'KRISTIN', '10:12:11'),
(49, 'FhyLefty', '10:12:00'),
(58, 'BAgus', '07:12:51');

-- --------------------------------------------------------

--
-- Table structure for table `pesan`
--

CREATE TABLE `pesan` (
  `id` int(10) NOT NULL,
  `nick` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `pesan` varchar(250) COLLATE latin1_general_ci NOT NULL,
  `waktu` time NOT NULL,
  `file` varchar(255) COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `pesan`
--

INSERT INTO `pesan` (`id`, `nick`, `pesan`, `waktu`, `file`) VALUES
(222, 'FhyLefty', 'test', '10:12:15', ''),
(221, 'FhyLefty', 'test', '10:12:15', ''),
(220, 'KRISTIN', 'CEK', '10:12:25', ''),
(219, 'WAHYULOG', '\\\\199.199.1.11\\share', '08:12:26', ''),
(218, 'hudhud', 'tes', '07:12:43', ''),
(232, 'BAgus', 'eeeeeee', '06:12:47', 'nge-chat.sql'),
(233, 'BAgus', 'ffffffffffffffffff', '06:12:30', 'nge-chat.sql'),
(234, 'BAgus', 'ggggggg', '06:12:55', 'nge-chat.sql'),
(278, 'BAgus', 'dddd', '04:12:23', 'Read Me !.txt'),
(279, 'BAgus', 'hhhhhhhh', '04:12:11', 'chat.mp3'),
(280, 'BAgus', 'ddd', '07:12:55', 'asakit.gif');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `nick` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `nick`, `email`, `pass`) VALUES
(14, 'dnewbie', 'dnewbie@jagocoding.com', 'd5aedf560b928e289dc4a76d8765bc4e'),
(23, 'daroel', 'email@email.com', '827ccb0eea8a706c4c34a16891f84e7b'),
(24, 'hudhud', 'siblulhuda@gmail.com', '25f9e794323b453885f5181f1b624d0b'),
(25, 'WAHYULOG', 'info@klinikbungamelati.com', '25f9e794323b453885f5181f1b624d0b'),
(26, 'KRISTIN', 'INFO@KLINIK', '25f9e794323b453885f5181f1b624d0b'),
(27, 'FhyLefty', 'fhy.lefty@gmail.com', '70dfe6e5bb7bfe609199c0cd18ab4790'),
(28, 'BAgus', 'bagus@gmail.com', 'e10adc3949ba59abbe56e057f20f883e');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `online`
--
ALTER TABLE `online`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pesan`
--
ALTER TABLE `pesan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `online`
--
ALTER TABLE `online`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `pesan`
--
ALTER TABLE `pesan`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=281;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
