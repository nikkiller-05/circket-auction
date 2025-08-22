const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const { verifyConfigPermission, verifyAdmin } = require('../middlewares/authMiddleware');

// Get all teams (public)
router.get('/', teamController.getTeams);

// Get team by ID (public)
router.get('/:id', teamController.getTeamById);

// Get team statistics (public)
router.get('/:id/stats', teamController.getTeamStats);

// Get team budget info (public)
router.get('/:id/budget', teamController.getTeamBudget);

// Compare all teams (public)
router.get('/compare/all', teamController.compareTeams);

// Update team (admin/super-admin only)
// router.put('/:id', verifyConfigPermission, teamController.updateTeam);
router.post('/update', verifyConfigPermission, teamController.updateTeams);

// Reset team (admin/super-admin only)
router.post('/:id/reset', verifyConfigPermission, teamController.resetTeam);

module.exports = router;
