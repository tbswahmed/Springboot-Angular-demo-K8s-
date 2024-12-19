package tn.esprit.rh.achat.controllers;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import tn.esprit.rh.achat.Dto.DTOOperateur;
import tn.esprit.rh.achat.Dto.DTOStock;
import tn.esprit.rh.achat.entities.Operateur;
import tn.esprit.rh.achat.entities.Stock;
import tn.esprit.rh.achat.services.IOperateurService;

import java.util.List;

@RestController
@Api(tags = "Gestion des opérateurs")
@RequestMapping("/operateur")
@CrossOrigin("*")
public class OperateurController {

	@Autowired
	IOperateurService operateurService;
	
	@GetMapping("/retrieve-all-operateurs")
	@ResponseBody
	public List<Operateur> getOperateurs() {
		return operateurService.retrieveAllOperateurs();
	}

	@GetMapping("/retrieve-operateur/{operateur-id}")
	@ResponseBody
	public Operateur retrieveOperateur(@PathVariable("operateur-id") Long operateurId) {
		return operateurService.retrieveOperateur(operateurId);
	}

	@PostMapping("/add-operateur")
	@ResponseBody
	public Operateur addOperateur(@RequestBody DTOOperateur s) {
		Operateur stock = new Operateur(s.getNom(),s.getPrenom(),s.getPassword(),s.getFactures());
		return operateurService.addOperateur(stock);
	}

	@DeleteMapping("/remove-operateur/{operateur-id}")
	@ResponseBody
	public void removeOperateur(@PathVariable("operateur-id") Long operateurId) {
		operateurService.deleteOperateur(operateurId);
	}

	@PutMapping("/modify-operateur")
	@ResponseBody
	public Operateur modifyStock(@RequestBody DTOOperateur o) {
		Operateur op = new Operateur(o.getNom(),o.getPrenom(),o.getPassword(),o.getFactures());
		return operateurService.updateOperateur(op);
	}

	
}
