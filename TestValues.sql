--Test Values for Script

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;



-- --------------------------------------------------------

--
-- Table structure for table `adt`
--

CREATE TABLE `adt` (
  `id` int(11) NOT NULL,
  `patientId` int(11) NOT NULL,
  `type` text NOT NULL,
  `message` longtext NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `orgunit` text DEFAULT NULL,
  `pvType` text DEFAULT NULL,
  `inOrOut` enum('I','O') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adt`
--

INSERT INTO `adt` (`id`, `patientId`, `type`, `message`, `createdAt`, `orgunit`, `pvType`, `inOrOut`) VALUES
(1, 1, 'Type 1', 'Dummy message 1', '2024-03-29 09:38:42', 'Orgunit 1', 'PV Type 1', 'I'),
(2, 2, 'Type 2', 'Dummy message 2', '2024-03-29 09:38:42', 'Orgunit 2', 'PV Type 2', 'O');

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `dob` date NOT NULL,
  `externalId` text NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `firstname`, `lastname`, `dob`, `externalId`, `updatedAt`) VALUES
(1, 'John', 'Doe', '1990-01-01', '123456', '2024-03-29 09:36:10'),
(2, 'Jane', 'Smith', '1985-05-10', '654321', '2024-03-29 09:36:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adt`
--
ALTER TABLE `adt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patientId` (`patientId`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `externalId_idx` (`externalId`) USING HASH,
  ADD UNIQUE KEY `patients_external_id` (`externalId`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adt`
--
ALTER TABLE `adt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adt`
--
ALTER TABLE `adt`
  ADD CONSTRAINT `adt_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `patients` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
