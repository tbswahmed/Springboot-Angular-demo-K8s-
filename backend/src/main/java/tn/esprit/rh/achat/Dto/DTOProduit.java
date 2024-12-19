package tn.esprit.rh.achat.Dto;

import java.util.Set;

import lombok.Getter;
import lombok.Setter;
import tn.esprit.rh.achat.entities.CategorieProduit;
import tn.esprit.rh.achat.entities.DetailFacture;
import tn.esprit.rh.achat.entities.Stock;

@Getter
@Setter
public class DTOProduit {

    private Long idProduit;
	private String codeProduit;
	private String libelleProduit;
	private float prix;
	private Stock stock;
	private Set<DetailFacture> detailFacture;
	private CategorieProduit categorieProduit;

    public DTOProduit(String codeProduit, String libelleProduit, float prix) {
        super();
        this.codeProduit = codeProduit;
        this.libelleProduit = libelleProduit;
        this.prix = prix;
    }
}
