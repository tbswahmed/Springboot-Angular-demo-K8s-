package tn.esprit.rh.achat.Dto;

import java.util.Set;

import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import tn.esprit.rh.achat.entities.Fournisseur;

@Getter
@Setter
public class DTOSecteurActivite {

	private Long idSecteurActivite;
	private String codeSecteurActivite;
	private String libelleSecteurActivite;
	private Set<Fournisseur> fournisseurs;
	
	
	 public DTOSecteurActivite(String codeSecteurActivite, String libelleSecteurActivite,Set<Fournisseur> fournisseurs) {
	        super();
	        this.codeSecteurActivite = codeSecteurActivite;
	        this.libelleSecteurActivite = libelleSecteurActivite;
	        this.fournisseurs = fournisseurs;
	    }
	
	
}
